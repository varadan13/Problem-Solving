(defn firsts [l]
  (cond
    (nil? (first l)) []
    :else (into [(first (first l))] (firsts (rest l)))))