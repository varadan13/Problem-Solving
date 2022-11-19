
;; why is this wrong?

;; (defn u-reduce [f i a]
;;   (loop [acc i array a]
;;     ((if (empty? array)
;;        acc
;;        (recur (f acc (first array))
;;               (rest array))))))

(defn ureduce [f i a]
  (loop [acc i curr a]
    (if (empty? curr)
      acc
      (recur (f acc (first curr)) (rest curr)))))
