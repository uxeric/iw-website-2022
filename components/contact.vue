<template>
  <div>
    <h3 class="heading text-align-center" id="contact">
      Contact <strong>Us</strong>
    </h3>
    <div class="divider"></div>

    <form
        id="contact-form"
        name="contact"
        class="contact"
        method="post"
        netlify
        netlify-honeypot="position"
    >
      <input
          id="name"
          name="name"
          class="name"
          type="text"
          placeholder="Name"
          required
          data-error="Please enter your name"
      />
      <input
          id="email"
          name="email"
          class="email"
          type="email"
          placeholder="Email"
          required
          data-error="Please enter your email"
      />
      <textarea
          id="message"
          name="message"
          class="message"
          placeholder="Message"
          rows="5"
          required
          data-error="Please write your message"
      ></textarea>

      <span class="hidden">
        <input name="position" />
    </span>

      <div class="actions text-align-center">
        <button id="contact-submit" class="button button-default" type="submit">
          Send
        </button>
      </div>
    </form>
  </div>
</template>
