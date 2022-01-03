/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = []

	if (nums.length < 3) return results

	// afford the O(NlogN) sort operation
	nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {

		if (nums[i] > target) break

		// we don't want repeats, so skip numbers we've already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue

		let j = i + 1

		// `k` represents the "right" most element
		let k = nums.length - 1

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])


				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				// finally, we need to actually move `j` forward and `k` backward to the
				// next unique elements. the previous while loops will not handle this.
				j++
				k--

			} else if (sum < target) {
				j++

			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};