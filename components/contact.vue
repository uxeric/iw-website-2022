<template>
  <div>
    <h3 class="heading text-align-center" id="contact">
      Contact <strong>Us</strong>
    </h3>
    <div class="divider"></div>

    <form
        id="contact-form"
        name="contact-form"
        class="contact"
        action="/?submitted=contact#contact"
        method="post"
        netlify
        netlify-honeypot="bot-field"
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

      <div class="actions text-align-center">
        <button id="contact-submit" class="button button-default" type="submit">
          Send
        </button>
      </div>
    </form>

    <alert v-show="$route.query['submitted'] === 'contact'" >
      Thank you for contacting us. We'll reply to your message soon!
    </alert>
  </div>
</template>
