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
              <a href="#features" class="p-2">Features</a>
            </li>
            <li>
              <a href="#contact" class="p-2">Contact</a>
            </li>
            <li>
              <a href="#about" class="p-2">About</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" class="button primary">
            <span class="p-2">Login</span>
          </a>
        </div>
      </nav>
    </header>
    <div>
      <div class="container mx-auto grid items-center py-16 grid-cols-2">
        <div class="grid gap-4">
          <div class="text-4xl font-semibold">
            Migrate to <span class="text-teal-700">any</span> cloud easily
          </div>
          <div>
            We are here as your tech partner helping you create, migrate & optimize your software products in any cloud.
          </div>
          <div class="flex gap-4">
            <a href="#" class="button primary">
              Talk to Us
            </a>
            <a href="#" class="button secondary">
              Getting Started
            </a>
          </div>
          <div class="text-teal-700 text-sm">
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
          Custom software services and cloud solutions
        </div>
        <div class="grid grid-cols-3 gap-8">
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/consulting.svg" alt="Consulting" width="64" height="64">
            <div class="text-xl">
              Consulting
            </div>
            <div class="text-center">
              Transform your business by migrating to cloud
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/migration.svg" alt="Migration" width="64" height="64">
            <div class="text-xl">
              Migration
            </div>
            <div class="text-center">
              Your application can have multiple Experience Domains
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/development.svg" alt="Development" width="64" height="64">
            <div class="text-xl">
              Development
            </div>
            <div class="text-center">
              Accelerating Innovation one application at a time
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
        <div class="mx-auto w-auto">
          <a href="#">More reasons to choose ApplicaSet</a>
        </div>
      </div>
    </div>
    <div>
      <div class="container mx-auto flex flex-cols items-center py-16 gap-8">
        <div>
          <img src="images/microservice-architecture.svg" alt="" width="256" height="256">
        </div>
        <div class="px-8 grid gap-4">
          <div class="text-3xl text-light">
            Create, Migrate & Optimize
          </div>
          <div>
            We are here as your tech partner helping you create, migrate & optimize your software products in any cloud.
          </div>
          <div class="text-teal-700 text-sm">
            Get started now, Schedule a consultation meeting
          </div>
          <div class="flex gap-4">
            <a href="#" class="button primary">Talk to Us</a>
            <a href="#" class="button secondary">Getting Started</a>
          </div>
        </div>
      </div>
    </div>
    <div id="features" class="bg-gray-100">
      <div class="container mx-auto grid items-center py-16 gap-8">
        <div class="text-4xl text-light mx-auto w-auto">
          Why ApplicaSet?
        </div>
        <div class="mx-auto w-auto">
          Custom software services and cloud solutions
        </div>
        <div class="grid grid-cols-3 gap-8">
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/cloud-migration.svg" alt="Cloud Migration" width="64" height="64">
            <div class="text-xl">
              Cloud Migration
            </div>
            <div class="text-center">
              Transform your business by migrating to cloud
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/domain-experience.svg" alt="Domain Experience" width="64" height="64">
            <div class="text-xl">
              Domain Experience
            </div>
            <div class="text-center">
              Your application can have multiple Experience Domains
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/accelerate-innovation.svg" alt="Accelerate Innovation" width="64" height="64">
            <div class="text-xl">
              Accelerate Innovation
            </div>
            <div class="text-center">
              Accelerating Innovation one application at a time
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/grow-fast.svg" alt="Grow Fast" width="64" height="64">
            <div class="text-xl">
              Grow Fast
            </div>
            <div class="text-center">
              The right team for the right project, No concern, just grow
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/technical-consultation.svg" alt="Technical Consultation" width="64" height="64">
            <div class="text-xl">
              Technical Consultation
            </div>
            <div class="text-center">
              First of all, Let’s talk about your technical concerns and needs
            </div>
          </div>
          <div class="bg-white rounded p-4 shadow flex flex-col gap-4 items-center">
            <img src="images/scale-applications.svg" alt="Scale Applications" width="64" height="64">
            <div class="text-xl">
              Scale Applications
            </div>
            <div class="text-center">
              Do not struggle when success forces you to scale rapidly
            </div>
          </div>
        </div>
        <div class="mx-auto w-auto">
          <a href="#">More reasons to choose ApplicaSet</a>
        </div>
      </div>
    </div>
    <div id="contact">
      <div class="container mx-auto grid items-center py-16 gap-8">
        <div class="text-4xl text-light mx-auto w-auto">
          Contact Us
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
.button.secondary {
  @apply border border-teal-700 text-teal-700;
}
</style>
