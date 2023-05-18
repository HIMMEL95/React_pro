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
        int num = 0;
        try {
            for (int i = 0; i < 100; i++) {
                // l1, l2 null 여부 파악
                String num1 = Integer.toString(l1.val);
                String num2 = Integer.toString(l2.val);

                System.out.println(i + " is : " + num1 + " : " + num2);
                System.out.println(i + " is : " + isInteger(num1) + " : " + isInteger(num2));
                System.out.println(Integer.valueOf(num2) == null);

                // l1, l2 둘 다 null이 아닐 경우
                if (isInteger(num1) && isInteger(num2)) {
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

                    if ((Integer.valueOf(num1) == null) || (Integer.valueOf(num2) == null)) {
                        continue;
                    }

                    System.out.println(l1 + " : " + l2);
                }
                // else if (isInteger(num1) && (Integer.valueOf(num2) == null)) { // l2가 null인
                // 경우
                // no = l1.val + top;
                // if (no > 9) {
                // top = 1;
                // no -= 10;
                // } else {
                // top = 0;
                // }
                // list.add(no);
                // l1 = l1.next;
                // } else if (isInteger(num2) && !isInteger(num1)) { // l1이 null인 경우
                // no = l2.val + top;
                // if (no > 9) {
                // top = 1;
                // no -= 10;
                // } else {
                // top = 0;
                // }
                // list.add(no);
                // l2 = l2.next;
                // }
            }

        } catch (NullPointerException e) {
            System.out.println(e);
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
        try {
            Integer.parseInt(strValue);
            return true;
        } catch (NumberFormatException ex) {
            return false;
        }
    }
}