(ns clojure-problems.core
  (:gen-class))

(defn map-using-reduce [f  arr]
  (let [g #(into %1 (vector (f %2)))]
    (reduce g [] arr)))

(defn -main
  "I don't do a whole lot ... yet."
  []
  (println (map-using-reduce #(+ % 20) [1 2 3 4 5 6])))
