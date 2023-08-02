import { NodeListOfSimpleLinkCircular } from "./nodeListOfSimpleLinkCircular.js";

const node1 = new NodeListOfSimpleLinkCircular(1);
const node2 = new NodeListOfSimpleLinkCircular(2);
const node3 = new NodeListOfSimpleLinkCircular(3);
const node4 = new NodeListOfSimpleLinkCircular(4);
const node5 = new NodeListOfSimpleLinkCircular(5);
const node6 = new NodeListOfSimpleLinkCircular(6);

node1.next = node2;
node1.next.next = node3;
node1.next.next.next = node4;
node1.next.next.next.next = node5;
node1.next.next.next.next.next = node6;
node1.next.next.next.next.next.next = node1;

export {node1 as ListCircularSimple, NodeListOfSimpleLinkCircular};