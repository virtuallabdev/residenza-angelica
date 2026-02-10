<script lang="ts">
  import { language } from '../stores/language';
  import { t } from '../lib/i18n';
  import FooterCol from './FooterCol.svelte';

  const socials = [
    { href: 'https://www.facebook.com/residenzaangelicalazise', label: 'Facebook' },
    { href: 'https://www.instagram.com/residenzaangelica/', label: 'Instagram' },
  ];

  const titleClass = 'font-bold mb-4 uppercase tracking-widest text-sm';
  const contentClass = 'text-sm text-white opacity-90';
</script>

<footer class="bg-primary text-primary-content py-12 mt-16 font-sans">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      
      
      <!-- Brand -->
      <FooterCol>
        <div slot="title">
          <h4 class={titleClass}>
            <img src="/residenza-angelica-logo.svg" alt="Residenza Angelica Logo" class="w-[160px] h-auto brightness-0 invert" />
          </h4>
        </div>
        <p slot="content" class={contentClass}>
          Via Pastrengo, 58<br />
          37017 Lazise (VR)<br />
          {t($language, 'footer.phone')}: +39 349 844 2487<br />
          {t($language, 'footer.email')}: <a href="mailto:info@residenzaangelica.it">info@residenzaangelica.it</a><br />
          Italy<br />
          {t($language, 'footer.vat_number')}: 04553630239
        </p>
      </FooterCol>


      <!-- Socials -->
      <FooterCol>
        <h4 slot="title" class={titleClass}>Seguici su</h4>
        <div slot="content" class="flex gap-4">
          {#each socials as item}
            <a href={item.href} class="btn btn-circle btn-sm btn-outline text-white border-white hover:bg-white hover:text-primary">
              {item.label}
            </a>
          {/each}
        </div>
       
      </FooterCol>


      <!-- About us -->
      <FooterCol>
        <h4 slot="title" class={titleClass}>Chi siamo</h4>
        <p slot="content" class={contentClass}>
          Residenza Angelica si trova a Lazise sul Lago di Garda immerso in un ampio e curato giardino a pochi chilometri dal centro storico di del 1° Comune d'Italia e comunque lontano dalle strade più trafficate e dal caos. 
        </p>
      </FooterCol>


      <!-- Contact Info -->
      <FooterCol>
        <h4 slot="title" class={titleClass}>{t($language, 'contact.title')}</h4>
        <p slot="content" class={contentClass}>
          Check-in: 14:00 - 18:00<br/>
          Chek-out:10:00<br/><br/>
          CIN: IT023043B4SFTKHB3W
      </FooterCol>
    </div>
     
    
    

    <!-- Bottom Footer -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
      <div class="flex gap-4">
        <a href="/privacy" title="{t($language, 'nav.privacy')}" class="link link-hover">{t($language, 'nav.privacy')}</a>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Residenza Angelica. {t($language, 'footer.rights')}</p>
      </div>
    </div>
  </div>
</footer>
