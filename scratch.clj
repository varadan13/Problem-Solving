(defn lat? [l]
  (loop [array l]
    (cond
      (nil? (first array)) true
      (seq? (first array)) false
      :else (recur (rest array)))))