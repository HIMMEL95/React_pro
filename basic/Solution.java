package basic;

import java.util.ArrayList;

class Solution {
    public static void main(String[] args) {
        ListNode l1 = new ListNode(9);
        l1.next = new ListNode(9);
        l1.next.next = new ListNode(9);
        l1.next.next.next = new ListNode(9);
        l1.next.next.next.next = new ListNode(9);
        l1.next.next.next.next.next = new ListNode(9);
        l1.next.next.next.next.next.next = new ListNode(9);

        ListNode l2 = new ListNode(9);
        l2.next = new ListNode(9);
        l2.next.next = new ListNode(9);
        l2.next.next.next = new ListNode(9);
        addTwoNumbers(l1, l2);
    }

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode();
        ArrayList<Integer> list = new ArrayList();
        int top = 0;
        int no = 0;
        while ((Integer.toString(l1.val) != null) && (Integer.toString(l2.val) != null)) {
            // l1, l2 null 여부 파악

            System.out.println(isInteger(Integer.toString(l1.val)) + " : " + isInteger(Integer.toString(l2.val)));

            Integer num1 = Integer.valueOf(l1.val);
            Integer num2 = Integer.valueOf(l2.val);

            System.out.println(num1 + " : " + num2);

            // l1, l2 둘 다 null이 아닐 경우
            if ((num1 != null) && (num2 != null)) {
                no = l1.val + l2.val;

                if (top == 0) { // top = 0
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                } else { // top =1
                    no = l1.val + l2.val + top;
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                }

                list.add(no);

                l1 = l1.next;
                l2 = l2.next;

            } else {
                // l1, l2 둘 중 하나는 null인 경우
                if (isInteger(Integer.toString(l1.val)) && !isInteger(Integer.toString(l2.val))) { // l2가 null인 경우
                    no = l1.val + top;
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                    list.add(no);
                    l1 = l1.next;
                } else if (isInteger(Integer.toString(l2.val)) && !isInteger(Integer.toString(l1.val))) { // l1이 null인
                                                                                                          // 경우
                    no = l2.val + top;
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                    list.add(no);
                    l2 = l2.next;
                }
            }
        }

        if (Integer.valueOf(l1.val) == null) {
            System.out.println("l1.val is null ");
        } else {
            System.out.println("l2.val is null");
        }
        System.out.println(list);

        for (int i = list.size(); i > 0; i--) {
            if (i != 0) {
                result.next = new ListNode(list.get(i - 1), result.next);
            }
        }
        result = result.next;

        return result;
    }

    public static boolean isInteger(String strValue) {
        System.out.println(strValue);
        try {
            Integer.parseInt(strValue);
            return true;
        } catch (NumberFormatException ex) {
            return false;
        } catch (NullPointerException e) {
            return false;
        }
    }
}