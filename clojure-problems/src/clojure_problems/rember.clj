(defn rember [a lat]
  (loop [latArray lat res []]
    (cond
      (nil? (first latArray)) res
      (= (first latArray) a) (recur (rest latArray) res)
      :else (recur (rest latArray) (into res [(first latArray)])))))