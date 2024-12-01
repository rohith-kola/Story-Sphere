package main

import (
	"bytes"
	"database/sql"
	"encoding/base64"
	"fmt"
	"image"
	"image/png"
	"net/http"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5433
	user     = "postgres"
	password = "****"
	dbname   = "StorySphereDB"
)

func dbcon() *sql.DB {
	psqlinfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlinfo)

	if err != nil {
		fmt.Println("Something went wrong")
		panic(err)
	}
	return db
}

func insert(db *sql.DB) {

	data, err := os.Open("/Users/Rohith/Downloads/profile-pic.png")
	if err != nil {
		fmt.Println("It's an error")
	}
	defer data.Close()
	out := new(bytes.Buffer)

	imageData, _, err := image.Decode(data)
	png.Encode(out, imageData)

	encodedString := base64.StdEncoding.EncodeToString(out.Bytes())

	insertStatement := `
	INSERT INTO public."Stories"(
	"Id", author, title, story, views, date, rating, image)
	VALUES($1, $2, $3, $4, $5, $6, $7, $8)`

	_, erre := db.Exec(insertStatement, 5, "Raju-2", "The Raju Story", "A kind man", 777, time.DateTime, 5, encodedString)

	if erre != nil {
		fmt.Printf("Not inserted")
		panic(err)
	}
}

func selection(c *gin.Context) {

	db := dbcon()

	type data struct {
		ID     int    `json:"id"`
		Author string `json:"author"`
		Title  string `json:"title"`
		Story  string `json:"story"`
		Views  string `json:"views"`
		Date   string `json:"date"`
		Rating string `json:"rating"`
	}
	selectStatement := `
	SELECT "Id", author, title, story, views, date, rating
	FROM public."Stories";`
	rows, err := db.Query(selectStatement)

	if err != nil {
		fmt.Println("Error while selection.")
	}
	defer rows.Close()

	var rowss []data

	for rows.Next() {
		var row data
		if err := rows.Scan(&row.ID, &row.Author, &row.Title, &row.Story, &row.Views, &row.Date, &row.Rating); err != nil {
			fmt.Println(err)
		}
		rowss = append(rowss, row)
	}

	c.IndentedJSON(http.StatusOK, rowss)

}

func main() {

	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"PUT", "PATCH", "POST", "DELETE", "GET"},
		AllowHeaders:     []string{"Content-Type"},
		AllowCredentials: true,
	}))
	router.GET("/GetStory", selection)
	router.Run("localhost:8989")
}
