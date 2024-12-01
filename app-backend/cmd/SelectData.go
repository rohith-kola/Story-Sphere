package main

func main() {
	var data struct {
		ID     int    `json:"id"`
		Author string `json:"author"`
		Title  string `json:"title"`
		Story  string `json:"story"`
		Views  string `json:"views"`
		Date   string `json:"date"`
		Rating string `json:"rating"`
	}

	selectStatement := `
	SELECT "Id", image
	FROM public."Stories" Where "Id" = 5;;`

	a, err := db.Query(selectStatement)

}
