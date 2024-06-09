/**
#region problem
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串的长度。

示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 
#endregion problem
*/

// #region code
function lengthOfLongestSubstring(s: string): number {
    if (s.length <= 1) return s.length;

    let max = 1;
    let win:string[] = [];
    let left = 0;
    let right = 1;
    win.push(s[left]);

    while(right < s.length) {
        let rc = s[right];
        right++;

        while(left < right && win.includes(rc)) {
            left++;
            win.shift();
        }
        max = Math.max(max, win.length);
    }

    return max;
};
// #endregion code