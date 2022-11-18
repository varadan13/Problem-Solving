(ns clojure-problems.core
  (:gen-class))

(defn u-merge [arr1 arr2] (into [] (distinct (concat arr1 arr2))))

(defn -main
  "I don't do a whole lot ... yet."
  []
  (println (u-merge [1 2 3 4 5 6] [5 6 7 8 9 10])))
