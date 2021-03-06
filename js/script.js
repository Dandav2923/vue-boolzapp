// alert ('ciao');
const app = new Vue (
    {
        el: '#app',
        data: {
            counter : 0,
            counterB :0,
            newMessage: '',
            valueInput:'',
            isClicked: false,
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
                            dropVisible: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent",
                            dropVisible: false
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received",
                            dropVisible: false
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
                            dropVisible: false
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                            dropVisible: false
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                            dropVisible: false
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
                            status: "received",
                            dropVisible: false
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                            dropVisible: false
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
                            dropVisible: false
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_4",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            dropVisible: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                            dropVisible: false
                        },
                    ],
                },
            ]
        },
        methods :{
            // devo ciclare sull'array dei messaggi per verificare lo status, se lo status del messaggio ?? ricevuto lo mettiamo in un array nuovo. Successivamente prendiamo l'ultimo elemento inserito e ci servir?? per avere la data dell'ultimo messaggio
            lastDate : function(messages) {
                    const receivedMessages = messages.filter((message) => {
                        return message.status =='received'});
                        let messageLength = receivedMessages.length - 1;
                        return receivedMessages[messageLength];
            },
            // aggiungere un elemento nuovo nella chat tramite input
            newElement: function () {
                // controllo dell'input che non sia vuoto 
                if (this.newMessage.trim().length > 0) {
                    this.contacts[this.counter].messages.push(
                        {
                        date: "15/01/2020 15:50:00",
                        text: this.newMessage,
                        status: "sent",
                        dropVisible: false
                    }
                    );
                    this.newMessage = '';
                    // risposta automatica dopo un tot di secondi 
                    setTimeout(() => { 
                        this.contacts[this.counter].messages.push(
                            {
                                date: "20/01/2020 15:50:00",
                                text: 'ok',
                                status: "received",
                                dropVisible: false
                            }
                    )}, 1000);
                }
            },
            // utilizziamo il valore di index nella nuova variabile per girare sull'array dei messaggi, successivamente cambio il valore della varibile booleana diversa da se stessa 
            // menuDropdown (index){
                // this.counterB = index;
                // this.contacts[this.counter].messages[this.counterB].dropVisible = !this.contacts[this.counter].messages[this.counterB].dropVisible;
                // console.log(this.contacts[this.counter].messages[this.counterB].dropVisible);
            // },
            // Elimino un elemento specifico dall'array
            deleteMessage (index){
                this.counterB = index;
                this.contacts[this.counter].messages.splice(this.counterB, 1);
            },
            // ricerca degli elementi
            searchContact : function() {
                this.contacts.forEach(element => {
                    if (element.name.toLowerCase().includes(this.valueInput.toLowerCase())){
                        element.visible = true;
                    }
                    else {
                        element.visible = false;
                    }
                });
            }
        }
    }
)