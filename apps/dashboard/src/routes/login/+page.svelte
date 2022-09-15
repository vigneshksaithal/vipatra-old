<script lang="ts">
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

  var email: string = '',
    password: string = '';

  var showAlert: Boolean = false;

  function login() {
    showAlert = false;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('success logged in');
        window.location.href = '/';
      })
      .catch((error) => {
        showAlert = true;
        console.log(error);
      });
  }
</script>

<div class="mx-auto max-w-4xl px-4 md:pt-12 mt-6">
  <div
    class="mx-auto bg-white border-2 border-gray-200 rounded-3xl shadow-sm w-full max-w-xl"
  >
    <h2
      class="bg-gray-400 text-white font-semibold text-xl text-center py-6 rounded-t-xl"
    >
      Login
    </h2>
    <div class="p-6 md:p-20">
      <input class="mb-8" type="email" placeholder="Email" bind:value={email} />
      <input type="password" placeholder="Password" bind:value={password} />
      <div>
        <div class="flex justify-end mt-6">
          <button
            class="px-8 py-2 text-base text-white bg-primary"
            on:click={login}
            >Login
          </button>
        </div>
      </div>
    </div>
  </div>

  {#if showAlert}
    <div class="mt-8 p-8 rounded-2xl bg-yellow-200">
      <p class="text-gray-800">
        ERROR: Email/Password incorrect. Please contact vipatra.in@gmail.com for
        help.
      </p>
    </div>
  {/if}
</div>

<style lang="postcss">
</style>
