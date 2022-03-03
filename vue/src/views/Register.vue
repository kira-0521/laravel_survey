<script lang="ts" setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { key } from "../store";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";

const store = useStore(key);
const router = useRouter();

const user = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
const errMsg = ref("");
const register = () => {
  store
    .dispatch("register", user)
    .then((res) => {
      console.log("regi success", res);
      router.push({ name: "Dashboard" });
    })
    .catch((err) => (errMsg.value = err.response.data.error));
};
</script>

<template>
  <div>
    <img
      class="mx-auto h-12 w-auto"
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      alt="Workflow"
    />
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      ユーザー登録
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      または
      {{ " " }}
      <router-link
        :to="{ name: 'Login' }"
        class="font-medium text-indigo-600 hover:text-indigo-500"
      >
        ログイン
      </router-link>
    </p>
  </div>
  <form class="mt-8 space-y-6" @submit.prevent="register">
    <div
      v-if="errMsg"
      class="
        flex
        items-center
        justify-between
        py-3
        px-5
        bg-red-500
        text-white
        rounded
      "
    >
      {{ errMsg }}
      <span
        @click="errMsg = ''"
        class="
          w-8
          h-8
          flex
          items-center
          justify-center
          rounded-full
          transition-colors
          cursor-pointer
          hover:bg-[rgba(0,0,0,0.2)]
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="full-name" class="sr-only">フルネーム</label>
        <input
          id="full-name"
          name="name"
          type="text"
          autocomplete="name"
          v-model="user.name"
          class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            rounded-t-md
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
          placeholder="フルネーム"
        />
      </div>
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          v-model="user.email"
          class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
          placeholder="メールアドレス"
        />
      </div>
      <div>
        <label for="password" class="sr-only">パスワード</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          v-model="user.password"
          class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
          placeholder="パスワード"
        />
      </div>
      <div>
        <label for="password_confirmation" class="sr-only"
          >パスワード確認用</label
        >
        <input
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          autocomplete="current-password_confirmation"
          v-model="user.password_confirmation"
          class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            rounded-b-md
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
          placeholder="パスワード確認用"
        />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          class="
            h-4
            w-4
            text-indigo-600
            focus:ring-indigo-500
            border-gray-300
            rounded
          "
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="
          group
          relative
          w-full
          flex
          justify-center
          py-2
          px-4
          border border-transparent
          text-sm
          font-medium
          rounded-md
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon
            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        Sign in
      </button>
    </div>
  </form>
</template>
