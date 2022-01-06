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
      active: 0,
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
                },
                {
                  date: "10/01/2020 15:50:00",
                  text: "Ricordati di dargli da mangiare",
                  status: "sent",
                },
                {
                  date: "10/01/2020 16:15:22",
                  text: "Tutto fatto!",
                  status: "received",
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
                },
                {
                  date: "20/03/2020 16:30:55",
                  text: "Bene grazie! Stasera ci vediamo?",
                  status: "received",
                },
                {
                  date: "20/03/2020 16:35:00",
                  text: "Mi piacerebbe ma devo andare a fare la spesa.",
                  status: "sent",
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
                },
                {
                  date: "28/03/2020 10:20:10",
                  text: "Sicuro di non aver sbagliato chat?",
                  status: "received",
                },
                {
                  date: "28/03/2020 16:15:22",
                  text: "Ah scusa!",
                  status: "sent",
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
                },
                {
                  date: "10/01/2020 15:50:00",
                  text: "Si, ma preferirei andare al cinema",
                  status: "received",
                },
              ],
            },
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
              let messageOk = {
                date: time,
                text: 'Ok',
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
    },
  })
