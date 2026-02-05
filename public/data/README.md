# Speisekarte – Template για Framer (framer.com)

Αυτός ο φάκελος περιέχει δείγμα δεδομένων μενού σε JSON για χρήση στο **Framer** (framer.com).

## Αρχείο

- **speisekarte-sample.json** – Δομή μενού με κατηγορίες και πιάτα/τιμές.

## Δομή δεδομένων

```json
{
  "categories": [
    {
      "id": "string",
      "title": "Όνομα κατηγορίας",
      "items": [
        { "name": "Όνομα πιάτου", "price": "X,XX €" }
      ]
    }
  ]
}
```

- **categories**: Λίστα κατηγοριών (π.χ. Vorspeisen, Hauptgerichte, Getränke).
- **id**: Μοναδικό αναγνωριστικό κατηγορίας.
- **title**: Τίτλος που εμφανίζεται στο μενού.
- **items**: Λίστα πιάτων. Κάθε item: **name**, **price** (string, π.χ. `"4,50 €"`).

## Χρήση στο Framer

1. **Framer CMS**  
   Δημιούργησε Collection με Properties: `category`, `categoryTitle`, `name`, `price`. Εισαγωγή δεδομένων (χειροκίνητα ή import) ώστε κάθε row να αντιστοιχεί σε ένα item. Χρήση **Repeat** για να εμφανίζεις Category blocks και Menu rows.

2. **Code Component**  
   Πάρε το JSON (copy-paste ή fetch από `/data/speisekarte-sample.json` αν το site είναι hosted). Στο Component: loop στα `categories`, για κάθε κατηγορία εμφάνισε `title` και loop στα `items` με `name` και `price` ανά row (name αριστερά, price δεξιά με space-between).

## Από Excel

Εξαγωγή του Excel σε CSV, μετά μετατροπή σε JSON με τη δομή πάνω (π.χ. csvtojson ή custom script). Κράτα τις στήλες: κατηγορία, τίτλος κατηγορίας, όνομα πιάτου, τιμή.
