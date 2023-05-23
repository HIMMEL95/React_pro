package basic;

import java.util.ArrayList;
import java.util.List;

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

        List<Integer> l1List = makeList(l1);
        List<Integer> l2List = makeList(l2);

        int size = (l1List.size() > l2List.size() ? l2List.size() : l1List.size());
        int total = (l1List.size() > l2List.size() ? l1List.size() : l2List.size());

        for (int i = 0; i < size; i++) {
            if (i == 0) {
                no = l1List.get(i) + l2List.get(i);
                if (no > 9) {
                    top = 1;
                    no -= 10;
                }
                list.add(no);
            } else {
                if (top == 0) {
                    no = l1List.get(i) + l2List.get(i);
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                    list.add(no);
                } else {
                    no = l1List.get(i) + l2List.get(i) + top;
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                    list.add(no);
                }
            }
        }

        if (total == l1List.size()) {
            for (int i = size; i < total; i++) {
                if (top == 0) {
                    no = l1List.get(i);
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                    list.add(no);
                } else {
                    no = l1List.get(i) + top;
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                    list.add(no);
                }
            }
        } else {
            for (int i = size; i < total; i++) {
                if (top == 0) {
                    no = l2List.get(i);
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                    list.add(no);
                } else {
                    no = l2List.get(i) + top;
                    if (no > 9) {
                        top = 1;
                        no -= 10;
                    } else {
                        top = 0;
                    }
                    list.add(no);
                }
            }
        }

        if (top == 1) {
            list.add(top);
        }
        System.out.println(list + " : " + top);

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

    public static List<Integer> makeList(ListNode ln) {

        List<Integer> list = new ArrayList<>();

        try {
            for (int i = 0; i < 100; i++) {
                list.add(Integer.valueOf(ln.val));
                ln = ln.next;
            }
        } catch (NullPointerException e) {

        }

        return list;
    }
}