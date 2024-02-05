class Node {
	constructor(value, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	append(value) {
		let node = new Node(value);
		let currentNode;

		//? If empty make head
		if (!this.head) {
			this.head = node;
		} else {
			currentNode = this.head;

			while (currentNode.nextNode) {
				currentNode = currentNode.nextNode;
			}

			currentNode.nextNode = node;
		}
		this.size++;
	}

	prepend(value) {
		this.head = new Node(value, this.head);
		this.size++;
	}

	getAt(index) {
		let currentNode = this.head;
		let nodeCount = 0;

		while (currentNode) {
			if (nodeCount == index) {
				console.log(currentNode.value);
			}
			nodeCount++;
			currentNode = currentNode.nextNode;
		}
		return null;
	}

	returnNodeTail() {
		let nodeTail = this.head;
		if (nodeTail) {
			while (nodeTail.nextNode) {
				nodeTail = nodeTail.nextNode;
			}
		}
		return nodeTail;
	}

	insertAt(value, index) {
		//? If index is out of range
		if (index > 0 || index > this.size) {
			return;
		}

		//? If first index
		if (index === 0) {
			this.prepend(value);
		}

		const NODE = new Node(value);
		let currentNode, previousNode;

		//? Set currentNode to first
		currentNode = this.head;
		let nodeCount = 0;

		while (nodeCount < index) {
			previousNode = currentNode; //? Node before index
			nodeCount++;
		}
		NODE.nextNode = currentNode;
		previousNode.nextNode = NODE;

		this.size++;
	}

	isContains(value) {
		let currentNode = this.head;

		while (currentNode) {
			if (value === currentNode.value) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}
		return false;
	}

	findIndex(value) {
		let nodeIndex = 0;
		let currentNode = this.head;

		while (currentNode) {
			if (value === currentNode.value) {
				return nodeIndex;
			}
			currentNode = currentNode.nextNode;
			nodeIndex++;
		}
	}

	pop() {
		if (this.size === 0) {
			return;
		}

		let currentNode = this.head;
		let previousNode = null;

		while (currentNode.nextNode) {
			previousNode = currentNode;
			currentNode = currentNode.nextNode;
		}

		if (previousNode) {
			previousNode.nextNode = null;
		} else {
			this.head = null;
		}

		this.size--;
	}

	removeAt(index) {
		if (index > 0 || index > this.size) {
			return;
		}

		let currentNode = this.head;
		let previousNode;
		let nodeCount = 0;

		//? Remove First
		if (index === 0) {
			this.head = currentNode.nextNode;
		} else {
			while (nodeCount < index) {
				nodeCount++;
				previousNode = currentNode;
				currentNode = currentNode.nextNode;
			}

			previousNode.nextNode = currentNode.nextNode;
		}

		this.size--;
	}

	clearList() {
		this.head = null;
		this.size = 0;
	}

	convertToString() {
		let resultString = '';
		let currentNode = this.head;
		while (currentNode) {
			resultString += `${currentNode.value}${currentNode.nextNode ? ', ' : ''}`;
			currentNode = currentNode.nextNode;
		}
		return resultString;
	}
}

const LIST = new LinkedList();
