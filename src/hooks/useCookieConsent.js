import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

export default function useCookieConsent() {
  useEffect(() => {
    const loadGTM = () => {
      // if (!window.googleAnalyticsLoaded) {
      //   window.googleAnalyticsLoaded = true;
      //   var gaScript = document.createElement('script');
      //   gaScript.async = true;
      //   gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-04YJSCS19F';
      //   document.head.appendChild(gaScript);
      //   gaScript.onload = () => {
      //     window.dataLayer = window.dataLayer || [];
      //     function gtag() { dataLayer.push(arguments); }
      //     gtag('js', new Date());
      //     gtag('config', 'G-04YJSCS19F');
      //   };
      // }
    };

    CookieConsent.run({
      root: 'body',
      autoShow: true,
      hideFromBots: true,
      cookie: {
        name: 'cc_cookie',
        domain: location.hostname,
        path: '/',
        sameSite: "Lax",
        expiresAfterDays: 365,
      },
      guiOptions: {
        consentModal: {
          layout: 'cloud inline',
          position: 'bottom center',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: true,
          flipButtons: false
        }
      },
      onFirstConsent: ({ cookie }) => {
        console.log('onFirstConsent fired', cookie);
        loadGTM();
      },
      onConsent: ({ cookie }) => {
        console.log('onConsent fired!', cookie);
        loadGTM();
      },
      onChange: ({ changedCategories, changedServices }) => {
        console.log('onChange fired!', changedCategories, changedServices);
      },
      onModalReady: ({ modalName }) => {
        console.log('ready:', modalName);
      },
      onModalShow: ({ modalName }) => {
        console.log('visible:', modalName);
      },
      onModalHide: ({ modalName }) => {
        console.log('hidden:', modalName);
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true
        },
        ads: {}
      },
      language: {
        default: 'cs',
        translations: {
          cs: {
            consentModal: {
              title: 'Cookies pro Rendaxsro.cz',
              description: 'Na našich webových stránkách používáme cookies, abychom vám usnadnili a zlepšili váš online zážitek. Pokračováním v prohlížení našich stránek souhlasíte s jejich používáním.',
              acceptAllBtn: 'Přijmout všechny',
              acceptNecessaryBtn: 'Odmítnout všechny',
              showPreferencesBtn: 'Podrobné nastavení',
            },
            preferencesModal: {
              title: 'Podrobné nastavení cookies',
              acceptAllBtn: 'Přijmout všechny',
              acceptNecessaryBtn: 'Odmítnout všechny',
              savePreferencesBtn: 'Přijmout pouze vybrané',
              closeIconLabel: 'Close modal',
              serviceCounterLabel: 'Služba|Služby',
              sections: [
                {
                  title: 'Vaše nastavení soukromí',
                  description: `V tomto panelu můžete vyjádřit své preference týkající se zpracování vašich osobních údajů. Svá rozhodnutí můžete kdykoli přezkoumat a změnit znovu otevřením tohoto panelu prostřednictvím poskytnutého odkazu. Pokud nesouhlasíte se specifickými zpracovatelskými aktivitami uvedenými níže, přepněte příslušné přepínače do polohy vypnuto nebo použijte tlačítko "Odmítnout vše" a potvrďte, že chcete své volby uložit.`,
                },
                {
                  title: 'Nezbytně nutné soubory cookies',
                  description: 'Tyto soubory zajišťují správné fungování webu a nelze je zakázat.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Více informací',
                  description: 'Pro jakékoli dotazy týkající se nastavení cookies a vašich voleb nás můžete <a href="#kontakt">kontaktovat.</a>'
                }
              ]
            }
          }
        }
      }
    });
  }, []);
}
