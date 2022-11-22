(defn lat? [l]
  (loop [array l]
    (cond
      (nil? (first array)) true
      (vector? (first array)) false
      :else (recur (rest array)))))
