;; (defn map-with-reduce [arr f]
;;   (reduce cons f)
;;   )

(defn u-cons [a b f] (cons (f a) (cons (f b) [])))

