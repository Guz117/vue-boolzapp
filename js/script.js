/*
Milestone 1

Replica della grafica con la possibilità di avere messaggi scritti dall’utente 
(verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, 
visualizzare nome e immagine di ogni contatto

Milestone 2

Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare 
tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione

Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3

Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando 
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente 
riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/

var app = new Vue({
    el: '#app',
    data: {
      welcome: 'welcome',
      benvenuto: 'Benvenuto in Boolzap',
      active: 0,
      visibleMessages: 'invisible',
      menuDropDown: false,
      newMessage: '',
      search: '',
        contacts: [
            {
              name: "Michele",
              avatar: "_1",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  text: "Hai portato a spasso il cane?",
                  status: "sent",
                  menuVisibility: false
                },
                {
                  date: "10/01/2020 15:50:00",
                  text: "Ricordati di dargli da mangiare",
                  status: "sent",
                  menuVisibility: false
                },
                {
                  date: "10/01/2020 16:15:22",
                  text: "Tutto fatto!",
                  status: "received",
                  menuVisibility: false
                },
              ],
            },
            {
              name: "Fabio",
              avatar: "_2",
              visible: true,
              messages: [
                {
                  date: "20/03/2020 16:30:00",
                  text: "Ciao come stai?",
                  status: "sent",
                  menuVisibility: false
                },
                {
                  date: "20/03/2020 16:30:55",
                  text: "Bene grazie! Stasera ci vediamo?",
                  status: "received",
                  menuVisibility: false
                },
                {
                  date: "20/03/2020 16:35:00",
                  text: "Mi piacerebbe ma devo andare a fare la spesa.",
                  status: "sent",
                  menuVisibility: false
                },
              ],
            },
          
            {
              name: "Samuele",
              avatar: "_3",
              visible: true,
              messages: [
                {
                  date: "28/03/2020 10:10:40",
                  text: "La Marianna va in campagna",
                  status: "sent",
                  menuVisibility: false
                },
                {
                  date: "28/03/2020 10:20:10",
                  text: "Sicuro di non aver sbagliato chat?",
                  status: "received",
                  menuVisibility: false
                },
                {
                  date: "28/03/2020 16:15:22",
                  text: "Ah scusa!",
                  status: "sent",
                  menuVisibility: false
                },
              ],
            },
            {
              name: "Luisa",
              avatar: "_6",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  text: "Lo sai che ha aperto una nuova pizzeria?",
                  status: "sent",
                  menuVisibility: false
                },
                {
                  date: "10/01/2020 15:50:00",
                  text: "Si, ma preferirei andare al cinema",
                  status: "received",
                  menuVisibility: false
                },
              ],
            },
          ],
          risposte: [
            "Abbi ancora un po' di pazienza",
            'È uno spreco di soldi',
            'Mettiti in gioco per scoprirlo',
            'Procedi con passo più rilassato',
            'È sicuro',
            'Non te lo consiglio',
            "Crepi l'avarizia",
            'Sarà un buon momento per fare nuovi progetti',
            'Vai oltre le apparenze'
        ],
          
    }, 
    methods: {
      changeUser: function (index) {
        this.active = index;
      },
      addMessage: function () {
        if (this.newMessage.trim().length != 0) {
          function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
          }
          const d = new Date();
          let day = addZero(d.getDate());
          let month = addZero(d.getMonth() + 1);
          let year = addZero(d.getFullYear());
          let h = addZero(d.getHours());
          let m = addZero(d.getMinutes());
          let s = addZero(d.getSeconds());
          let time = day + '/' + month + '/' + year + ' ' + h + ":" + m + ":" + s;
            let message = {
              date: time,
              text: this.newMessage,
              status: "recevied",
              menuVisibility: false
            }
            
            this.contacts[this.active].messages.push(message);
            this.newMessage = ''
            setTimeout (() =>  {
              function addZero(i) {
                if (i < 10) {i = "0" + i}
                return i;
              }
              const d = new Date();
              let day = addZero(d.getDate());
              let month = addZero(d.getMonth() + 1);
              let year = addZero(d.getFullYear());
              let h = addZero(d.getHours());
              let m = addZero(d.getMinutes());
              let s = addZero(d.getSeconds());
              let time = day + '/' + month + '/' + year + ' ' + h + ":" + m + ":" + s;
              let frasiRandom = this.risposte[Math.floor(Math.random()*this.risposte.length)];
              let messageOk = {
                date: time,
                text: frasiRandom,
                status: "sent",
                menuVisibility: false
              }
              this.contacts[this.active].messages.push(messageOk);
              console.log(this)
            }, 1000)
        }
      },
      
      searchContact: function(contact) {
        let search = contact.name.toLowerCase().includes(this.search.toLowerCase());
        return search
      },  

      searchChangeUser: function(index) {
      this.active = index;
      this.contacts[index].visible = true;
      this.search = '';
      },

      deleteMessage: function(index) {
        this.contacts[this.active].messages.splice(index, 1);
      },

      darkMode: function () {
        let darkModeScreen = document.querySelector('.screen-messages-tot');
        darkModeScreen.classList.toggle("dark-mode-screen");
        let darkModeMessageSend = document.querySelectorAll('.send');
        for (let i = 0; i < darkModeMessageSend.length; i++) {
          darkModeMessageSend[i].classList.toggle("dark-mode-message-send");
        }
        let darkModeMessageReceived = document.querySelectorAll('.received');
        for (let i = 0; i < darkModeMessageReceived.length; i++) {
          darkModeMessageReceived[i].classList.toggle("dark-mode-message-received");
        }
        let darkModeContact = document.querySelector('.contact');
        darkModeContact.classList.toggle("dark-mode-contact");
        let darkModeAvatar = document.querySelector('.avatar');
        darkModeAvatar.classList.toggle("dark-mode-avatar");
        let darkModeAvatarMessage = document.querySelector('.avatar-message');
        darkModeAvatarMessage.classList.toggle("dark-mode-avatar-message");
        let darkModeWriteMessage = document.querySelector('.write-message');
        darkModeWriteMessage.classList.toggle("dark-mode-write-message");
        let darkModeAvatarContact = document.querySelectorAll('.avatar-contact');
        for (let i = 0; i < darkModeAvatarContact.length; i++) {
          darkModeAvatarContact[i].classList.toggle("dark-mode-avatar-contact");
        }
        
     },

     lastMessageOrData: function(index) {
        if (this.contacts[this.active].messages.length > 0) {
          return this.contacts[index].messages[this.contacts[index].messages.length -1];
        } else {
          return this.newMessage;
        }
       
    },
      
    },

    created() {
      let welcome = setTimeout(() => {
        this.welcome = '';
        this.benvenuto = '';
        this.visibleMessages = 'visible';
      }, 2000);
    },

     
  })
