import { ListSimple, NodeListSimple } from "./ListSimple/listSimple.js";
import { DoublyListLinked, NodeListDoublyLinked } from "./DoublyListLinked/doubleListLinked.js";
import { ListCircularSimple, NodeListOfSimpleLinkCircular } from "./ListCircularSimple/ListCircularSimple.js";

const SIMPLE = new NodeListSimple();
const DOUBLY = new NodeListDoublyLinked();
const CIRCULAR = new NodeListOfSimpleLinkCircular();

SIMPLE.next = ListSimple;
DOUBLY.next = DoublyListLinked;
CIRCULAR.next = ListCircularSimple;

// console.log('LISTA SIMPLE:', SIMPLE);
// console.log('LISTA DOBLE:', DOUBLY);
// console.log('LISTA CIRCULAR:', CIRCULAR);

const removeNode = (list, value) => {
    let current = list;

    while(current.next) {
        if (current.next.value === value) {

            console.log('NODO ENCONTRADO (NODE BASE):', current.next)

            /**
             * Validación para lista enlazada simple.
             * 
             * Solo tiene un nodo next, y este es buscado
             * por el valor y se elimina.
            */
            if (current.next.next && !current.next.prev) {
                console.log('¿1?')
                current.next = current.next.next;
            }

            /**
             * Validación para lista enlazada doble.
             * 
             * Esta lista tiene un nodo next y prev
             * se valida que existan, entonces se 
             * toma el nodo next y prev para cambiar
             * su referencia.
            */
            if (current.next.next !== null && current.next.prev !== null) {
                console.log('¿2?')
                // Node next current.next.next
                current.next.prev.next = current.next.next;

                // Node prev current.next.prev
                current.next.prev = current.next.prev.prev;

            /**
             * Validación, si se elimina el último nodo de la doble lista enlazada.
             * 
             * Se toma el penultimo nodo y se setea el next por null para borrar el
             * último nodo.
            */
            } else if (!current.next.next && current.next.prev) {
                console.log('¿3?')
                // Node prev
                current.next.prev.next = null;
            }

        } else {
            current = current.next;
        }
    }

    return list.next;
}

const printList = list => {
    const arr = [];
    for (let node = list; node; node = node.next) {
        arr.push(node.value);
    }
    return arr;
}

// removeNode(SIMPLE, 3);
// removeNode(DOUBLY, 4);
// removeNode(CIRCULAR, 5);

// console.log(removeNode(SIMPLE, 3));
// console.log(printList(removeNode(SIMPLE, 3)));

// console.log(removeNode(DOUBLY, 4));
// console.log(printList(removeNode(DOUBLY, 4)));

console.log(removeNode(CIRCULAR, 5));
// console.log(printList(removeNode(CIRCULAR, 5)));