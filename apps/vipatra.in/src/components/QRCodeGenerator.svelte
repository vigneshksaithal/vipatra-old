<script>
  import QRCode from 'qrcode';
  import { onMount } from 'svelte';
  import { saveAs } from 'file-saver';

  let text = 'https://vipatra.in',
    canvasEl;

  onMount(async () => {
    await QRCode.toCanvas(canvasEl, text);
  });

  function getQRCode() {
    QRCode.toCanvas(canvasEl, text);
  }

  async function downloadPng() {
    await canvasEl.toBlob(function (blob) {
      saveAs(blob, 'qr-code.png');
    });
  }

  async function downloadSvg() {
    await QRCode.toString(text, {
      type: 'svg',
    }).then((svg) => {
      var blob = new Blob([svg]);
      saveAs(blob, 'qr-code.svg');
    });
  }
</script>

<main class="grid grid-cols-1 gap-4 mx-auto max-w-4xl">
  <div class="">
    <canvas bind:this={canvasEl} />
  </div>
  <label for="QR Code text">Enter QR Code text</label>
  <input class="" type="text" bind:value={text} on:input={getQRCode} />

  <div class="flex justify-center gap-6 pt-4">
    <button class="bg-red-500 text-white" on:click={downloadPng}
      >Download PNG</button
    >
    <button class="bg-green-500" on:click={downloadSvg}>Download SVG</button>
  </div>
</main>
