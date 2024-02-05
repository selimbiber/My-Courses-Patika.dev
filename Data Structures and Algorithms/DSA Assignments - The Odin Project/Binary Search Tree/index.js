//? Function to print out the balanced BST on terminal
const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}
	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

class Node {
	constructor(data = null, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class Tree {
	constructor(inputArray) {
		this.inputArray = [...removeDuplicates(mergeSort(inputArray))];
		this.root = this.buildTree(this.inputArray, 0, this.inputArray.length - 1);
		this.preOrderData = [];
		this.inOrderData = [];
		this.postOrderData = [];
	}
	buildTree(inputArray, start, end) {
		if (start > end) return null;
		const MID = parseInt((start + end) / 2);
		const ROOT = new Node(inputArray[MID]);

		ROOT.left = this.buildTree(inputArray, start, MID - 1);
		ROOT.right = this.buildTree(inputArray, MID + 1, end);
		return ROOT;
	}
	insert(value, root = this.root) {
		if (root == null) {
			return (root = new Node(value));
		}
		if (root.data < value) {
			root.right = this.insert(value, root.right);
		} else {
			root.left = this.insert(value, root.left);
		}
		prettyPrint(this.root);
		return root;
	}
	delete(value, root = this.root) {
		if (root == null) {
			return root;
		}
		if (root.data > value) {
			root.left = this.delete(value, root.left);
		} else if (root.data < value) {
			root.right = this.delete(value, root.right);
		} else {
			if (root.left == null) {
				return root.right;
			} else if (root.right == null) {
				return root.left;
			}
			root.data = getMinValue(root);
			root.right = this.delete(root.data, root.right);
		}
		prettyPrint(root);
		return root;
	}
	find(value, root = this.root) {
		if (root == null) return false;
		if (root.data == value) return root;

		if (root.data > value) {
			return this.find(value, root.left);
		} else if (root.data < value) {
			return this.find(value, root.right);
		}
		prettyPrint(this.root);
		return root;
	}
	levelOrder(root = this.root) {
		const QUEUE = [];
		const RESULT = [];

		if (root == null) return;

		QUEUE.push(root);

		while (QUEUE.length > 0) {
			let currentRoot = QUEUE.shift(root);
			RESULT.push(currentRoot.data);

			if (currentRoot.left !== null) QUEUE.push(currentRoot.left);
			if (currentRoot.right !== null) QUEUE.push(currentRoot.right);
		}
		console.log(`Lets level order this tree... ${RESULT}`);
	}
	inOrder(root = this.root) {
		if (root == null) return;

		if (root.left !== null) {
			this.inOrder(root.left);
		}

		if (root.data !== undefined) {
			this.inOrderData.push(root.data);
		}

		if (root.right !== null) {
			this.inOrder(root.right);
		}

		console.log(`Lets print this tree inOrder... ${this.inOrderData}`);
	}
	preOrder(root = this.root) {
		if (root == null) return;

		if (root.data !== undefined) {
			this.preOrderData.push(root.data);
		}

		if (root.left !== null) {
			this.preOrder(root.left);
		}

		if (root.right !== null) {
			this.preOrder(root.right);
		}

		console.log(`Lets print this tree preOrder... ${this.preOrderData}`);
	}
	postOrder(root = this.root) {
		if (root == null) return;

		if (root.left !== null) {
			this.preOrder(root.left);
		}

		if (root.right !== null) {
			this.postOrder(root.right);
		}

		if (root.data !== undefined) {
			this.postOrderData.push(root.data);
		}

		console.log(`Lets print this tree postOrder... ${this.postOrderData}`);
	}

	height(root = this.root) {
		if (root == null) return -1;

		const LEFT = this.height(root.left);
		const RIGHT = this.height(root.right);

		return Math.max(LEFT, RIGHT) + 1;
	}

	depth(nodeVal, root = this.root, edgeCount = 0) {
		if (root === null) return;
		if (root.data === nodeVal) return edgeCount;

		if (root.data < nodeVal) {
			return this.depth(nodeVal, root.right, edgeCount + 1);
		}
		return this.depth(nodeVal, root.left, edgeCount + 1);
	}

	isBalanced(root = this.root) {
		if (root == null) return false;

		const LEFT_HALF = root.left;
		const RIGHT_HALF = root.right;

		if (Math.abs(this.height(LEFT_HALF) - this.height(RIGHT_HALF)) > 1) {
			return false;
		}
		return true;
	}

	rebalance() {
		prettyPrint(this.root);
		if (this.isBalanced(this.root)) return this.root;

		let rebalancedNewTreeArray = [];
		rebalancedNewTreeArray = this.traverse(this.root, rebalancedNewTreeArray);

		const BALANCED_TREE = new Tree(rebalancedNewTreeArray);
		prettyPrint(BALANCED_TREE.root);
		console.log(`Is the tree now balanced?... ${BALANCED_TREE.isBalanced()}`);
		return BALANCED_TREE.root;
	}

	traverse(root, array) {
		if (array !== undefined) array.push(root.data);

		if (root.left !== null) {
			this.traverse(root.left, array);
		}

		if (root.right !== null) {
			this.traverse(root.right, array);
		}

		return array;
	}
}

//? Helper Functions

function getMinValue(root) {
	let minValue = root.data;
	while (root != null) {
		minValue = root.data;
		root = root.left;
	}
	prettyPrint(root);
	return minValue;
}

function mergeSort(inputArray) {
	if (inputArray.length == 1) return inputArray;

	const NEW_ARRAY = [];

	const LEFT = mergeSort(
		inputArray.slice(0, Math.floor(inputArray.length / 2))
	);
	const RIGHT = mergeSort(inputArray.slice(Math.floor(inputArray.length / 2)));

	while (LEFT.length && RIGHT.length) {
		if (LEFT[0] < RIGHT[0]) {
			NEW_ARRAY.push(LEFT.shift());
		} else {
			NEW_ARRAY.push(RIGHT.shift());
		}
	}

	return [...NEW_ARRAY, ...LEFT, ...RIGHT];
}

function removeDuplicates(inputArray) {
	return [...new Set(inputArray)];
}

const TEST_INPUT_ARRAY = [1, 2, 3, 4, 5, 6, 7];
const BALANCED_BST = new Tree(TEST_INPUT_ARRAY, 1, 7);
BALANCED_BST.insert(9);
BALANCED_BST.delete(3);
console.log(BALANCED_BST.find(6));
BALANCED_BST.levelOrder();
BALANCED_BST.inOrder();
BALANCED_BST.preOrder();
BALANCED_BST.postOrder();
