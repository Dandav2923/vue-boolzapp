// alert ('ciao');
const app = new Vue (
    {
        el: '#app',
        data: {
            counter : 0,
            newMessage: '',
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
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
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
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
            ]
        },
        methods :{
            // devo ciclare sull'array dei messaggi per verificare lo status, se lo status del messaggio è ricevuto lo mettiamo in un array nuovo. Successivamente prendiamo l'ultimo elemento inserito e ci servirà per avere la data dell'ultimo messaggio
            lastDate : function(messages) {
                    const receivedMessages = messages.filter((message) => {
                        return message.status =='received'});
                        let messageLength = receivedMessages.length - 1;
                        return receivedMessages[messageLength];
            },
            newElement: function () {
                if (this.newMessage.trim().length > 0) {
                    this.contacts[this.counter].messages.push(
                        {
                        date: "15/01/2020 15:50:00",
                        text: this.newMessage,
                        status: "sent",
                    }
                    );
                    this.newMessage = '';
                    setTimeout(() => { 
                        this.contacts[this.counter].messages.push(
                            {
                                date: "20/01/2020 15:50:00",
                                text: 'ok',
                                status: "received",
                            }
                    )}, 1000);
                }
            }
        }
    }
)