package com.valentin.ershov.stocks.dao;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.valentin.ershov.stocks.entity.Stock;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.net.URL;

/**
 * Created by Valek on 12.09.2017.
 */
@Repository
public class StockDAO {

    private static final String STOCK_URL = "https://www.google.com/finance/info?q=";

    public Stock getPrice(String ticker) throws RuntimeException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.ALLOW_COMMENTS, true);
        Stock stock = null;
        try {
            URL url = new URL(STOCK_URL + ticker);
            stock = mapper.readValue(url, Stock.class);
            //stock.setPrice(new BigDecimal(Math.random()));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return stock;
    }
}
