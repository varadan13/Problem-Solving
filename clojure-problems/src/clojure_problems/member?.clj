(defn member? [a l]
  (loop [lat l]
    (cond
      (nil? (first lat)) false
      (= (first lat) a) true
      :else (recur (rest lat)))))