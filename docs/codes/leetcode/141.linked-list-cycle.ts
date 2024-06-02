/**
#region problem
给你一个链表的头节点 head ，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
如果链表中存在环 ，则返回 true 。 否则，返回 false 。

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
#endregion problem
*/
import { ListNode } from "./common/linked-list";

// #region code
function hasCycle(head: ListNode | null): boolean {
    if (head == null || head.next == null) return false;

    let fast: ListNode | null = head.next
    while (fast && fast.next && head) {
        if (fast == head) {
            return true;
        }

        head = head.next;
        fast = fast.next.next
    }

    return false;
};
// #endregion code