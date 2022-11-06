<template>
  <div>
    <header class="border-b border-teal-700/20">
      <nav class="container mx-auto p-2 flex justify-between items-center">
        <a href="#" class="flex items-center">
          <img src="images/logo.svg" alt="ApplicaSet" width="48" height="48">
          <span class="mx-2">ApplicaSet</span>
        </a>
        <div>
          <ul class="flex flex-row gap-4">
            <li>
              <a href="#services" class="p-2">Services</a>
            </li>
            <li>
              <a href="#contact" class="p-2">Contact</a>
            </li>
            <li>
              <a href="#about" class="p-2">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div>
      <div class="container mx-auto grid items-center py-16 grid-cols-2">
        <div class="grid gap-4">
          <div class="text-4xl font-semibold">
            Migrate to <span class="text-primary">any</span> cloud easily
          </div>
          <div>
            We are here as your tech partner helping you create, migrate & optimize your software products in any cloud.
          </div>
          <div class="flex gap-4">
            <a href="#contact" class="button primary">
              Contact Us
            </a>
          </div>
          <div class="text-primary text-sm">
            Contact us now for a free consultation meeting.
          </div>
        </div>
        <div>
          <img src="images/cloud.svg" alt="Cloud" width="512" height="512">
        </div>
      </div>
    </div>
    <div id="services" class="bg-gray-100">
      <div class="container mx-auto grid items-center py-16 gap-8">
        <div class="text-4xl text-light mx-auto w-auto">
          Our Services
        </div>
        <div class="mx-auto w-auto">
          Custom software services and <span class="text-primary">cloud</span> solutions
        </div>
        <div class="grid grid-cols-3 gap-8">
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/technical-consultation.svg" alt="Consulting" width="64" height="64">
            <div class="text-xl">
              Consulting
            </div>
            <div class="text-center">
              Advice and solutions for modernizing your infrastructure
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/migration.svg" alt="Migration" width="64" height="64">
            <div class="text-xl">
              Migration
            </div>
            <div class="text-center">
              Transform your business by migrating to the cloud
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/accelerate-innovation.svg" alt="Development" width="64" height="64">
            <div class="text-xl">
              Development
            </div>
            <div class="text-center">
              Accelerating innovation by using great tools
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/security.svg" alt="Security" width="64" height="64">
            <div class="text-xl">
              Security
            </div>
            <div class="text-center">
              The right team for the right project, No concern, just grow
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/devops.svg" alt="DevOps" width="64" height="64">
            <div class="text-xl">
              DevOps
            </div>
            <div class="text-center">
              Our DevOps engineers will work with your team on defining a workflow and tool chain
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/scale.svg" alt="Scale" width="64" height="64">
            <div class="text-xl">
              Scale
            </div>
            <div class="text-center">
              Do not struggle when success forces you to scale rapidly
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="contact">
      <div class="container mx-auto grid items-center py-16 gap-8">
        <div class="text-4xl text-light mx-auto w-auto">
          Contact Us
        </div>
        <div class="mx-auto w-auto">
          <Mailto mail="contact@applicaset.com" subject="Consultant">
            contact@applicaset.com
          </Mailto>
        </div>
      </div>
    </div>
    <div id="about" class="bg-gray-100">
      <div class="container mx-auto grid items-center py-16 gap-8">
        <div class="text-4xl text-light mx-auto w-auto">
          About Us
        </div>
        <div class="mx-auto w-auto">
          We are a group engineers and entrepreneurs who are interested in cloud technologies and upgrading infrastructures.
        </div>
      </div>
    </div>
    <div>
      <div class="container mx-auto grid items-center p-4">
        <div class="mx-auto w-auto">
          &copy; 2022 ApplicaSet
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.button {
  @apply px-4 py-2 rounded;
}
.button.primary {
  @apply bg-teal-700 text-white px-4 py-2 rounded;
}
.text-primary {
  color: #008B8B;
}
</style>
