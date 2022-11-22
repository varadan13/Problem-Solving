(ns clojure-problems.core
  (:gen-class))

;; (defn u-reduce [f i a]
;;   (loop [acc i array a]
;;     ((if (empty? array)
;;        acc
;;        (recur (f acc (first array))
;;               (rest array))))))

;; (defn ureduce [f i a]
;;   (loop [acc i curr a]
;;     (if (empty? curr)
;;       acc
;;       (recur (f acc (first curr)) (rest curr)))))

;; (defn r [a]
;;   (loop [cu a]
;;     (if (empty? cu) "a"
;;         (recur (rest cu)))))

;; (defn my-reduce
;;   [f initial coll]
;;   (loop [result initial
;;          remaining coll]
;;     (if (empty? remaining)
;;       result
;;       (recur (f result (first remaining)) (rest remaining)))))


;; (defn map-using-reduce [f  arr]
;;   (let [g #(into %1 (vector (f %2)))]
;;     (ureduce g [] arr)))

;; (defn sum-integers [a b]
;;   (loop [point a value 0]
;;     (if (> point b) value
;;         (recur (+ point 1) (+ value point)))))

;; (defn sum-cubes [a b]
;;   (let [cube #(* % % %)]
;;     (loop [point a value 0]
;;       (if (> point b) value
;;           (recur (+ 1 point) (+ value (cube point)))))))


;; (defn lat? [l]
;;   (loop [array l]
;;     (cond
;;       (nil? (first array)) true
;;       (vector? (first array)) false
;;       :else (recur (rest array)))))

(defn member? [a l]
  (loop [lat l]
    (cond
      (nil? (first lat)) false
      (= (first lat) a) true
      :else (recur (rest lat)))))

(defn -main
  "I don't do a whole lot ... yet."
  []
  (println (member? 3 [3 4])))
  ;; (println (ureduce + 0 [1 2 3]))
  ;; (println (sum-integers 1 10))
  ;; (println (sum-cubes 1 5)))