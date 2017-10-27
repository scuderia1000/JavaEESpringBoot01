package com.valentin.ershov.stocks.service;

import com.valentin.ershov.stocks.dao.StockDAO;
import com.valentin.ershov.stocks.entity.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

/**
 * Created by Valek on 12.09.2017.
 */
@Service
public class StockService {

    private StockDAO stockDAO;

    @Autowired
    public StockService(StockDAO stockDAO) {
        this.stockDAO = stockDAO;
    }

    public Stock getPrice(String ticker) {
        return stockDAO.getPrice(ticker);
    }

    public List<Stock> getPrices(List<String> tickers) {
        return tickers.parallelStream().map(ticker -> stockDAO.getPrice(ticker)).collect(toList());
    }
}
