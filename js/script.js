// Creiamo una mini app di todolist con html+css+js in Vue. Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

var app = new Vue({
    el: '#app',
    data: {
        titolo: "TodoListVue by Adriana",
        items: ["Fare la spesa", "Fare la lavatrice"],
        nuovoItem: ''
    },
    computed: {
        reversedItems() {
          return this.items.slice( 0 ).reverse();
        },
      },
    methods: {
        //funzione per il bottone aggiungi
        aggiungiItem: function(){
            if(this.nuovoItem.trim() !== ''){
                this.items.push(this.nuovoItem);
                this.nuovoItem = '';
            };
        },

        //funzione per la X nel div list-item-delete
        removeItem: function(item){
            this.items.splice(item, 1);
        }

    }
});