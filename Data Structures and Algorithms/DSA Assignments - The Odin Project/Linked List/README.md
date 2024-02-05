# Interpretation of project steps (ChatGPT)

1. A class called Node is defined in the code. This class represents each element in the list. Each node has a value and a reference to the next node.

2. Another class called LinkedList is defined. This class keeps track of the start node of the linked list and the size of the list.

3. The append() function adds a node to the end of the list. If the list is empty, it sets the new node as the head node. Otherwise, it finds the last node in the list and appends the new node to it.

4. The prepend() function adds a node to the beginning of the list. It sets the new node as the head node and connects the nextNode property of the new node to the old head node.

5. The getAt() function returns the value of the node at a given index.

6. The returnNodeTail() function returns the last node of the list.

7. The insertAt() function inserts a new node at a specified index. If the index is zero, it calls the prepend() function. If the index is not in a valid range, it terminates the function. Otherwise, it places the new node at the specified index and reconnects the other nodes.

8. The isContains() function checks if a given value exists in the list. If the value is found in the list, it returns true. Otherwise, it returns false.

9. The findIndex() function finds and returns the index of a given value in the list.

10. The pop() function removes the last element of the list. If the list is empty, it terminates the function. Otherwise, it traverses until the last node of the list and removes it.

11. The removeAt() function removes the node at a specified index. If the index is not in a valid range, it terminates the function. If the index is zero, it removes the head node. Otherwise, it removes the node at the specified index and reconnects the other nodes.

12. The clearList() function clears the entire list. It sets the head node and the size to zero.

13. The convertToString() function returns the elements of the list as a string. It creates a string where each element is separated by a comma followed by the next element.

14. Finally, an object is created from the LinkedList class.
