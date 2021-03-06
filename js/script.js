// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

var app = new Vue(
    {
        el:'#root',
    
        data:{
            inputUser:'',
            todos:[
                'Fare i compiti',
                'Fare il bucato',
                'Fare la spesa'

            ],
        },
        methods:{
            newToDo(){
                if(this.inputUser.length > 0){
                    this.todos.push(this.inputUser);
                    this.inputUser= '';
                }
            },
            deleteItem(index){
                this.todos.splice(index,1);
            }

            
        }
    }
);