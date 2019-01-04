bool has_cycle(SinglyLinkedListNode* head) {
    if(head == NULL)    return false;
    
    SinglyLinkedListNode* slow = head;
    SinglyLinkedListNode* fast = head->next;
    
    while(fast != NULL && fast->next != NULL)
    {
        slow = slow->next;
        fast = fast->next->next;
        
        if(fast == slow)    return true;
    }
    
    return false;
}