import { NodeListSimple } from "./nodeListSimple.js";

const node1 = new NodeListSimple(1);
const node2 = new NodeListSimple(2);
const node3 = new NodeListSimple(3);
const node4 = new NodeListSimple(4);
const node5 = new NodeListSimple(5);
const node6 = new NodeListSimple(6);

node1.next = node2;
node1.next.next = node3;
node1.next.next.next = node4;
node1.next.next.next.next = node5;
node1.next.next.next.next.next = node6;

export {node1 as ListSimple, NodeListSimple};