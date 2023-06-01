<script lang="ts">
  import { PUBLIC_IKIT_URL_ENDPOINT } from '$env/static/public';
  import ImageKit from 'imagekit-javascript';

  export let data;

  const imagekit = new ImageKit({
    urlEndpoint: PUBLIC_IKIT_URL_ENDPOINT,
  });
</script>

<div class="text-gray-1 font-default">
  <!-- header -->
  <div class="bg-dark-7">
    <div class="flex p-5 items-center gap-4">
      <img src="/logo-white.png" alt="logo" class="w-[3rem]" />
      <h2 class="mt-[4px] text-2xl">BR Photography</h2>
    </div>
    <div class="flex flex-col py-8 px-5 mx-auto items-center max-w-7xl">
      <h3 class="text-xl">👋 Hi, I am Binu Rashin</h3>
      <p class="my-5 text-xl leading-8 text-justify text-gray-4">
        Passionate photographer with 2+ years of experience specializing in portrait, wedding, and
        nature photography. I aim to create emotive, storytelling images that leave a lasting
        impression
      </p>
    </div>
  </div>

  <!-- pics -->
  <div class="bg-dark-5 p-5 border-1 divider">
    <h3 class="mb-5 text-md leading-8">My Favorite Pics</h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each data.imageFiles as imageFile}
        <img
          class="h-[20rem] lg:h-[25rem] w-full object-cover rounded-xl"
          src={imagekit.url({
            path: imageFile.filePath,
            transformation: [{ height: '1500' }],
          })}
          alt={imageFile.name}
        />
      {/each}
    </div>
  </div>

  <!-- contact -->
  <div
    class="bg-dark-7/50 flex py-3 justify-center text-xl gap-5 fixed bottom-0 w-full border-1 divider"
  >
    <a class="bg-blue-5" href="tel:+918129832512">
      <div class="i-fa-phone" />
    </a>
    <a target="_blank" class="instagram-bg" href="https://www.instagram.com/b.r.photo.graphy/">
      <div class="i-fa-instagram" />
    </a>
    <a target="_blank" href="https://wa.me/+919745832512" class="bg-[#25d366]">
      <div class="i-fa-whatsapp" />
    </a>
    <a class="bg-red-5" href="https://www.pinterest.com/b_r_photography/">
      <div class="i-fa-pinterest" />
    </a>
  </div>
</div>

<style>
  .instagram-bg {
    background-image: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
  }
  a {
    @apply text-white rounded-md text-lg p-3;
  }

  .divider {
    box-shadow: 0px 0 5px rgba(255, 255, 255, 0.2);
  }
</style>
