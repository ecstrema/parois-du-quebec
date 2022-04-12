<script lang="ts">
  import { t } from "$i18n";

  import SvelteSeo from "svelte-seo";

  // const emailAddress = "info@escaladelaurentides.ca";
  const emailAddress = "info@escaladelaurentides.ca";

  $: pageTitle = `${$t("Contact")} • ${$t("Escalade Laurentides")}`;
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<SvelteSeo description="Contacter les auteurs" />

<div class="flex" style="width: 100%">
  <form
    id="sendEmail"
    action="https://formsubmit.co/info@escaladelaurentides.ca"
    class="form"
    method="POST"
  >
    <h1>{$t("Nouvelle mise a jour")}</h1>
    <h3 for="contact">{$t("Moyen de contact")}*</h3>
    <input type="text" name="contact" required />
    <h3 for="content">{$t("Informations")}*</h3>
    <textarea name="content" required />
    <input
      type="submit"
      class="mailto"
      form="sendEmail"
      value={$t("Envoyer")}
    />
  </form>
  <div>
    <p class="description">
      {$t("MerciInfo")}
    </p>
    <div class="description">

      {$t("MerciContact")}
    </div>
    <p>
		{$t("LienEmailBrise")}
		{emailAddress}
	</p>
  </div>
</div>

<style>
  textarea {
    height: 200px;
  }
  @media only screen and (max-width: 800px) {
    textarea {
      height: 75px;
    }
  }

  .flex {
    display: flex;
    flex-direction: row;
  }
  @media only screen and (max-width: 800px) {
    .flex {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 75vw;
  }

  .description {
    margin-top: 20px;
  }

  .mailto {
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    width: 15%;
    min-width: 150px;
    align-self: center;
    background-color: #1976d2;
    color: white;

    margin-top: 40px;
    margin-bottom: 30px;

    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .mailto:hover,
  .mailto:focus {
    box-shadow: 0 0 6px rgb(35 173 255);
  }
  .mailto:focus {
    font-weight: 600;
    outline: none;
  }
  @media only screen and (max-width: 800px) {
    .mailto {
      width: 100%;
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 600px) {
    .mailto {
      width: 100%;
      margin-top: 10px;
    }
  }
</style>
