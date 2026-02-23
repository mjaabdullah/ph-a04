### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById দ্বারা নির্দিষ্ট কোন আইডিকে ধরা যায়।
- getElementsByClassName দ্বারা ডকুমেন্ট এ থাকা নির্দিষ্ট নামের সকল Class কে ধরা যায়।
- querySelector দ্বারা আইডি, ক্লাস এবং ট্যাগ সব কিছুই ধরা যায়। তবে এটি শুধুমাত্র প্রথম ইলিমেন্টটা দেয়।
- querySelectorAll দ্বরা ডকুমেন্টে থাকা সকল Class & HTML Tag কে ধরা যায়।

### 2. How do you create and insert a new element into the DOM?

- document.createElement() দ্বারা কোন HTML element তৈরি করা যায়। এবং appendChild() দ্বারা তৈরি করা ইলিমেন্টকে কোন HTML element এর চাইল হিসেবে insert করা হয়।

### 3. What is Event Bubbling? And how does it work?

- Event Bubbling: চাইল্ড ইলিমেন্ট এ কোন ইভেন্ট হলে এটি ধাপে ধাপে উপরের দিকে উঠতে থাকে। এবং এটি ডকুমেন্ট পর্যন্ত পৌছায়। অর্থাৎ চাইল্ড থেকে প্যারেন্ট এর দিকে গিয়ে একেবারে ডকুমেন্ট পর্যন্ত পৌছায়।

### 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation: Event Bubbling এর উপর ভিত্তি করে কাজ করে। অর্থাৎ কোন ইভেন্ট একাধিক ইলিমেন্ট এ না বসিয়ে শুধুমাত্র তাদের প্যারেন্ট বসিয়ে কাজ করা হয়। এবং ইভেন্টটি ধাপে ধাপে তার প্যারেন্ট পর্যন্ত পৌছায়। Event Delegation এর ব্যবহারে কোড কম লাগে।

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault() কোনো html element-এর default behaviour বন্ধ করে দেয়।

* আর stopPropagation() দ্বারা ইভেন্ট বাবলিং বন্ধ করা হয়।
