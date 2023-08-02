import { NodeListDoublyLinked } from "./nodeListDoublyLinked.js";

const node1 = new NodeListDoublyLinked(1);
const node2 = new NodeListDoublyLinked(2);
const node3 = new NodeListDoublyLinked(3);
const node4 = new NodeListDoublyLinked(4);
const node5 = new NodeListDoublyLinked(5);
const node6 = new NodeListDoublyLinked(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

node2.prev = node1;
node3.prev = node2;
node4.prev = node3;
node5.prev = node4;
node6.prev = node5;

export {node1 as DoublyListLinked, NodeListDoublyLinked};