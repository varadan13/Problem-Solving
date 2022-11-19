(defn sum-integers [a b]
  (loop [point a]
    (if (> point b) point
        (recur (+ point 1)))))