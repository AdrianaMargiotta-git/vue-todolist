// Creiamo una mini app di todolist con html+css+js in Vue. Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.
//Bonus: dò la possibilità anche di inserire la nuova “cosa da fare”, scritta nell’input anche con la pressione del tasto ‘enter’ da tastiera; (line 23html)

var app = new Vue({
    el: '#app',
    data: {
        titolo: "TodoListVue by Adriana",
        titolo2: "Tasks to be done",
        immagine: "img/vue-symbol.jpg",
        completed: true,
        items: [
            {
                name: "fare la spesa",
                completed: false
            },
            {
                name: "fare la lavatrice",
                completed: false
            }
        ],
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
            this.items.push( {
                name: this.nuovoItem,
                completed: false
            });
            this.nuovoItem = '';

            //codice senza completed
            // if(this.nuovoItem.trim() !== ''){
            //     this.items.push(this.nuovoItem);
            //     this.nuovoItem = '';
            // };
        },

        //funzione per la X nel div list-item-delete
        removeItem: function (item) {
            this.items = this.items.filter((newItem) => newItem.name !== item.name);
        },

        //non funziona come dovrebbe
        // removeItem: function(item){
        //     this.items.splice(item, 1);
        // }

        //funzione flag attività svolta
        completedItem: function (item) {
            item.completed = !item.completed;
        }

    }
});