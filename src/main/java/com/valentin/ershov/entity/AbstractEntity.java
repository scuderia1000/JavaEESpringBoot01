package com.valentin.ershov.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.Instant;
import java.time.ZoneOffset;
import java.util.UUID;

/**
 * Created by Valek on 31.10.2017.
 */
@MappedSuperclass
public abstract class AbstractEntity {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private UUID id;
    private Long create_time;
//    private String created_by;
    private Long update_time;
//    private String updated_by;

    public AbstractEntity() {
        this(null);
    }

    public AbstractEntity(UUID id) {
        this.id = id;
    }

    public void preInsert() {

        if (create_time == null) {
            create_time = Instant.now().atZone(ZoneOffset.UTC).toInstant().toEpochMilli();
        }
        if (update_time == null) {
            update_time = Instant.now().atZone(ZoneOffset.UTC).toInstant().toEpochMilli();
        }
    }

    @PreUpdate
    public void preUpdate() {
        update_time = Instant.now().atZone(ZoneOffset.UTC).toInstant().toEpochMilli();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Long getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Long create_time) {
        this.create_time = create_time;
    }

    public Long getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Long update_time) {
        this.update_time = update_time;
    }
}
