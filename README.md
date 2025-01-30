# React: Memory Leak with setInterval in useEffect

This repository demonstrates a common React bug involving memory leaks caused by improper usage of `setInterval` within the `useEffect` hook.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

**Problem:**
The original code uses `setInterval` to update a counter every second. However, it fails to provide a cleanup function within the `useEffect` hook to clear the interval when the component unmounts. This results in a memory leak; the interval continues to run even after the component is removed from the DOM.

**Solution:**
The solution incorporates a cleanup function that uses `clearInterval` to stop the interval before the component is unmounted. This prevents the memory leak.

This example highlights the importance of using cleanup functions in `useEffect` when dealing with asynchronous operations like `setInterval` or `setTimeout` to ensure proper resource management and avoid memory leaks.