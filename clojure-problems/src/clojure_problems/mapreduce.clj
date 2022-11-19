(defn map-using-reduce [f  arr]
  (let [g #(into %1 (vector (f %2)))]
    (reduce g [] arr)))