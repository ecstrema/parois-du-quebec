
<script lang="ts">
  import { t } from "$i18n";

  import SvelteSeo from "svelte-seo";

  // const emailAddress = "info@escaladelaurentides.ca";
  const emailAddress = "info@paroisduquebec.ca";

  $: pageTitle = `${$t("Contact")} • ${$t("Escalade Laurentides")}`;
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<SvelteSeo description="Contacter les auteurs" />

<div class="row">
  <div class="gauche">
    <form
      id="sendEmail"
      action="https://formsubmit.co/info@paroisduquebec.ca"
      class="form"
      method="POST"
    >
      <h1>{$t("Nouvelle mise à jour")}</h1>
      <h3 for="contact">{$t("Moyen de contact")}*</h3>
      <input type="text" name="contact" required style="border: none; background:#EEE; line-height: 2.5em; border-radius: 6px; font-size: 14px; padding: 4px;"/>
      <h3 for="content">{$t("Informations")}*</h3>
      <textarea name="content" required style="border: none; background:#EEE; resize: vertical; padding: 10px; border-radius: 6px; font-size: 14px;"/>
      <input
        type="submit"
        class="mailto"
        form="sendEmail"
        value={$t("Envoyer")}
      />
      <input type="hidden" name="_next" value="https://www.paroisduquebec.ca/merci">
    </form>
  </div>
  <div class="droite">
    <p class="description">
      {$t("MerciInfo")}
    </p>
    <div class="description" style="">

      {$t("MerciContact")}
    </div>
    <p  class="description">
		{$t("LienEmailBrise")}
		<a style="all: unset; cursor: pointer;" target="_blank" rel="noopener noreferrer" href="mailto:{emailAddress}">{emailAddress}</a>
	  </p>
  </div>
</div>

<style>


  /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */

  /* Create two unequal columns that sits next to each other */
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 900px) {
    .row {
      flex-direction: column;
    }
  }
  /* left column */
  .gauche {
      flex: 66%;
  }

  /* Main column */
  .droite {
      flex: 25%;
      padding: 15px;
      padding-top: 120px;
  }
  @media only screen and (max-width: 900px) {
    .droite{
      padding-top: 10px;
    }
  }
  textarea {
    height: 200px;
  }
  @media only screen and (max-width: 800px) {
    textarea {
      height: 75px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .description {
    margin-top: 20px;
  }

  .mailto {
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    border: none;
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
